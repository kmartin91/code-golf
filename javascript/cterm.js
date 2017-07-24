// Cterm
w=n=readline(t=2,i=0)
while(w>1)w%t?(t++,i=0,w=n):(w/=t,i++)
print(Math.pow(t,i+1))