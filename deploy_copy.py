r"""把正本（小朋友學英文\）複製到部署夾 _deploy\kids-english\（git 只在部署夾跑）。

不複製：game\scratch-td\ 底下除了 web\ 以外的東西（_build\ 腳本、中文檔名正本講義與 .sb3、.md 規格），__pycache__。
不刪除：部署夾裡多出來的檔案只列出來，要刪請到部署夾 git rm。
"""
import os, shutil, sys

HERE = os.path.dirname(os.path.abspath(__file__))
DST = os.path.join(os.path.dirname(HERE), "_deploy", "kids-english")


def skip(rel):
    parts = rel.replace("\\", "/").split("/")
    if "__pycache__" in parts or ".git" in parts:
        return True
    if parts[:2] == ["game", "scratch-td"] and (len(parts) < 3 or parts[2] != "web"):
        return True
    return False


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
# 部署版 index.html 的本地 .js/.css 加 ?v=時間戳，避免 iPad 拿到快取的舊檔（新資料配舊引擎會壞）
import re, time
idx = os.path.join(DST, "index.html")
ver = time.strftime("%Y%m%d%H%M%S")
with open(idx, encoding="utf-8") as f:
    html = f.read()
html, n = re.subn(r'((?:src|href)="(?!https?:|data:)[^"?]+\.(?:js|css))"', lambda m: f'{m.group(1)}?v={ver}"', html)
with open(idx, "w", encoding="utf-8", newline="\n") as f:
    f.write(html)
print("cache-busted", n, "assets in index.html, v =", ver)
stale = []
for dp, dn, fn in os.walk(DST):
    dn[:] = [x for x in dn if x != ".git"]
    for f in fn:
        rel = os.path.relpath(os.path.join(dp, f), DST)
        if rel not in want:
            stale.append(rel)
print("copied", len(want), "files to", DST.encode("unicode_escape").decode())
print("stale in deploy (not in source):", [s.encode("unicode_escape").decode() for s in stale] or "none")
sys.exit(0)
