r"""把天平正本複製成 math/balance.html（ASCII 檔名）。

正本：G:\Yoda x Claude\小朋友學AI\數學-天平解方程式.html
副本：<本資料夾>\math\balance.html  —— 不要手改副本；改正本後重跑本檔，再推 kids-english。
"""
import os, shutil, hashlib

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(os.path.dirname(HERE), "小朋友學AI", "數學-天平解方程式.html")
DST = os.path.join(HERE, "math", "balance.html")

os.makedirs(os.path.dirname(DST), exist_ok=True)
shutil.copyfile(SRC, DST)
md5 = lambda p: hashlib.md5(open(p, "rb").read().replace(b"\r\n", b"\n")).hexdigest()
assert md5(SRC) == md5(DST)
print("synced math/balance.html", os.path.getsize(DST), "bytes md5", md5(DST))
