r"""把正本（小朋友學習站\）複製到部署夾 _deploy\Kids-Station\（git 只在部署夾跑）。

不複製：game\scratch-td\ 底下除了 web\ 以外的東西（_build\ 腳本、中文檔名正本講義與 .sb3、.md 規格），__pycache__，
       mindmap\test\、mindmap\_demo\（心智圖 demo 與單元測試）、mindmap\ 底下的 .md。
不刪除：部署夾裡多出來的檔案只列出來，要刪請到部署夾 git rm。
防快取：部署夾裡每一個 .html 的同站 .js/.css 引用都加 ?v=<該檔內容雜湊>（見 bust_all）。
"""
import os, re, shutil, sys, hashlib

HERE = os.path.dirname(os.path.abspath(__file__))
DST = os.path.join(os.path.dirname(HERE), "_deploy", "Kids-Station")


def skip(rel):
    parts = rel.replace("\\", "/").split("/")
    if "__pycache__" in parts or ".git" in parts:
        return True
    if parts[:2] == ["game", "scratch-td"] and (len(parts) < 3 or parts[2] != "web"):
        return True
    # 心智圖（社會、自然）：只部署頁面、引擎、資料；測試、demo、格式說明（.md）只留本機
    if parts[0] == "mindmap" and (len(parts) > 1 and parts[1] in ("test", "_demo") or rel.lower().endswith(".md")):
        return True
    return False


# ---- 防快取 ----
# 以前只替 index.html 加 ?v=時間戳；子頁（math/balance、ai/*、Scratch web/*、account、login）的 ../kids-auth.js、
# ../kids-coins.js 沒有，iPad 可能吃到舊版。現在每個 .html 的同站 .js/.css 都加 ?v=<內容雜湊>：
# 檔案沒變網址就不變（快取照用、部署夾 git 也不會每次整批變動），檔案一改網址就跟著換。
ASSET_RE = re.compile(r'((?:src|href)=")((?!https?:|data:|//|#)[^"?#]+\.(?:js|css))(")')


def asset_hash(path, _cache={}):
    if path not in _cache:
        with open(path, "rb") as f:
            _cache[path] = hashlib.sha1(f.read()).hexdigest()[:10]
    return _cache[path]


def bust_html(html, html_dir, root):
    """html 裡指到 root 底下實際存在的 .js/.css 加上 ?v=雜湊；已經有 ? 的、外站的、找不到的檔不動。回傳 (新 html, 改了幾個)。"""
    root = os.path.normpath(root)
    n = 0

    def sub(m):
        nonlocal n
        target = os.path.normpath(os.path.join(html_dir, m.group(2).replace("/", os.sep)))
        if not target.startswith(root + os.sep) or not os.path.isfile(target):
            return m.group(0)
        n += 1
        return f"{m.group(1)}{m.group(2)}?v={asset_hash(target)}{m.group(3)}"

    return ASSET_RE.sub(sub, html), n


def bust_all(root, rels):
    """root 底下 rels（相對路徑）裡的每個 .html 都做 bust_html。回傳 (改了幾個引用, 幾個檔)。"""
    total = files = 0
    for rel in sorted(rels):
        if not rel.lower().endswith(".html"):
            continue
        path = os.path.join(root, rel)
        with open(path, encoding="utf-8", newline="") as f:
            html = f.read()
        new, n = bust_html(html, os.path.dirname(path), root)
        if n:
            with open(path, "w", encoding="utf-8", newline="") as f:
                f.write(new)
            total += n
            files += 1
    return total, files


def main():
    want = set()
    for dp, dn, fn in os.walk(HERE):
        for f in fn:
            rel = os.path.relpath(os.path.join(dp, f), HERE)
            if skip(rel):
                continue
            want.add(rel)
            d = os.path.join(DST, rel)
            os.makedirs(os.path.dirname(d), exist_ok=True)
            shutil.copy2(os.path.join(HERE, rel), d)
    n, nf = bust_all(DST, want)
    print("cache-busted", n, "asset refs in", nf, "html files (?v=content hash)")
    stale = []
    for dp, dn, fn in os.walk(DST):
        dn[:] = [x for x in dn if x != ".git"]
        for f in fn:
            rel = os.path.relpath(os.path.join(dp, f), DST)
            if rel not in want:
                stale.append(rel)
    print("copied", len(want), "files to", DST.encode("unicode_escape").decode())
    print("stale in deploy (not in source):", [s.encode("unicode_escape").decode() for s in stale] or "none")


if __name__ == "__main__":
    main()
    sys.exit(0)
