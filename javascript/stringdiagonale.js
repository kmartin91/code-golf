// Write a diagonal string
r=readline,N=r(),q=v=""
for(i=0,x=N-1;i<N;x--,i++){a=r(),q+=a[i],v+=a[x]}print(q+" "+v)