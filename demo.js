let arr = [3,3,3,4,4,4,5,5,6,6,7];
function unify(ar){
    let len = ar.length, i = 0; j = 1;
    while(j < len){
        if(ar[i] != ar[j]){
            ar[++i] = ar[j++];
        }
        else{
            j++;
        }
    }
    ar.length = i + 1;
}
unify(arr);
console.log(arr);