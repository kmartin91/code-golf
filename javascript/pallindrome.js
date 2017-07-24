// Finding Pallindrome (entry: BOB KAYAK TOTO AUTO)
r=readline
N=r()
for(;N--;)W=r(),print(W==W.split("").reverse().join(""))