var num=7
flag=0
for(i=2;i<num;i++)
{
    if(i%num==0)
    {
        flag=1
        break
    }
    else{
        flag=0
    }
}
if (flag==0){
    console.log('Prime number')
}
else{
    console.log('Not prime')
}