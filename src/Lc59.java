//94.84%
class Solution {
    public int[][] generateMatrix(int n) {
        int[][] re = new int[n][n];
        int i = 0, j = 0, count = 1;
        int[] dir = {0, 1, 2, 3};
        int cur_dir = 0;
        while(i >= 0 && i < n && j >=0 && j < n && re[i][j] == 0){
            re[i][j] = count;
            count++;
            boolean flag = false;
            if(cur_dir == 0){
                if(j + 1 < n && re[i][j + 1] == 0)
                    j++;
                else{
                    i++;
                    flag = true;
                }
            }
            else if(cur_dir == 1){
                if(i + 1 < n && re[i + 1][j] == 0)
                    i++;
                else{
                    flag = true;
                    j--;
                }
            }
            else if(cur_dir == 2){
                if(j - 1 >=0 && re[i][j - 1] == 0)
                    j--;
                else{
                    i--;
                    flag = true;
                }
            }
            else{
                if(i - 1 >= 0 && re[i - 1][j] == 0)
                    i--;
                else{
                    j++;
                    flag = true;
                }  
            }
            if(flag)
                cur_dir = (cur_dir + 1) % 4;
        }
        return re;
    }
}