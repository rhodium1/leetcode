//63.54%
import java.util.ArrayList;

public class Lc60{

    public static String getPermutaion(int n, int k){
        k = k - 1;
        ArrayList<Integer> arr = new ArrayList();
        String re = "";
        int total = 1;
        for(int i = 1; i <= n; i++){
            arr.add(i);
            total *= i;
        }
        while(n > 0){
            total = total / n;
            n = n - 1;
            int curGroup = k / total;
            re += (char)('0' + arr.get(curGroup));
            arr.remove(curGroup);
            k = k - total * curGroup;
        }
        return re;
    }

    public static void main(String[] args){
        System.out.print(getPermutaion(3, 1));
    }
}
