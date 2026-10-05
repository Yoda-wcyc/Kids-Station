r"""把 kids-english 打包成遊戲庫的單一 HTML。

python build_single.py
  1. index.html 內嵌 style.css、data/*.js、engine.js、app.js
  2. <title> 改成「英文-句型/單字/文法」，</body> 前加遊戲庫標配尾段（角落簽名＋流量 beacon，從天平那支複製）
  3. 寫到遊戲庫正本 game\（LF）與 _deploy\game\（CRLF）
  4. 在兩邊的 index.html GAMES 登錄（已登錄就跳過）
刻意不加 yoda-game-badge.js、投資免責、檢核鈕。
"""
import os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
BASE = os.path.dirname(HERE)
GAME_SRC = os.path.join(BASE, "game")
GAME_DEPLOY = os.path.join(BASE, "_deploy", "game")
OUT_NAME = "英文-句型單字文法.html"
TITLE = "英文-句型/單字/文法"
TAIL_FROM = os.path.join(GAME_SRC, "數學-天平解方程式.html")
ENTRY = """  {
    date:'2026.10.5',
    title:'英文-句型/單字/文法',
    pain:'國小基本單字 240 個、字根字首、12 個文法和 12 個句型：聽、選、拼、排句子，錯題自動複習，學會了就打勾',
    file:'英文-句型單字文法.html',
    status:'live',
    sky:'linear-gradient(180deg,#FFB347 0%,#FFD98A 50%,#FFF8EC 100%)',
    dark:false
  },
"""


def read(p):
    with open(p, encoding="utf-8") as f:
        return f.read().replace("\r\n", "\n")


def write(p, s, crlf):
    data = s.replace("\r\n", "\n")
    if crlf:
        data = data.replace("\n", "\r\n")
    with open(p, "w", encoding="utf-8", newline="") as f:
        f.write(data)


def build():
    html = read(os.path.join(HERE, "index.html"))
    # 遊戲庫版只有英文：拿掉科目列、數學 iframe（index.html 裡標了 <!-- subjects --> 的行）
    html = "\n".join(l for l in html.split("\n") if "<!-- subjects -->" not in l)
    assert "subjects" not in html, "subject bar leaked into single build"
    css = read(os.path.join(HERE, "style.css"))
    html = html.replace('<link rel="stylesheet" href="style.css">', "<style>\n" + css + "</style>")

    def inline(m):
        js = read(os.path.join(HERE, m.group(1).replace("/", os.sep)))
        return "<script>\n" + js.replace("</script", "<\\/script") + "</script>"

    html, n = re.subn(r'<script src="([^"]+)"></script>', inline, html)
    assert n == 6, f"expected 6 scripts, got {n}"
    assert 'href="style.css"' not in html and "src=" not in re.sub(r"<script>.*?</script>", "", html, flags=re.S).replace('src="https://', "")
    html = re.sub(r"<title>.*?</title>", f"<title>{TITLE}</title>", html, count=1)

    src = read(TAIL_FROM)
    i, j = src.find("<!-- yoda-logo-sig -->"), src.rfind("</body>")
    assert i > 0 and j > i, "tail blocks not found in 天平"
    tail = src[i:j]
    assert "yoda-logo" in tail and "script.google.com" in tail and "yoda-game-badge" not in tail
    html = html.replace("</body>", tail + "</body>", 1)
    return html


def register(index_path, crlf):
    s = read(index_path)
    if f"file:'{OUT_NAME}'" in s:
        return "already"
    k = s.find("const GAMES=[")
    assert k >= 0, "GAMES not found"
    k = s.index("\n", k) + 1
    write(index_path, s[:k] + ENTRY + s[k:], crlf)
    return "added"


if __name__ == "__main__":
    html = build()
    old = os.path.join(GAME_SRC, OUT_NAME)
    print("unchanged" if os.path.exists(old) and read(old) == html else "changed")
    write(os.path.join(GAME_SRC, OUT_NAME), html, False)
    write(os.path.join(GAME_DEPLOY, OUT_NAME), html, True)
    print("built", OUT_NAME, len(html.encode("utf-8")), "bytes")
    for d, crlf in ((GAME_SRC, False), (GAME_DEPLOY, True)):
        p = os.path.join(d, "index.html")
        print(p, register(p, crlf) if os.path.exists(p) else "missing")
    sys.exit(0)
