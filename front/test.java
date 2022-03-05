public class test {
    public static void main(String[] args) {
        int[][] arr;
        arr = new int[2][2];
        for(int i=0;i<arr.length;i++){
           for(int j=0;j<arr[i].length;j++){
               arr[i][j]=5+i;

           }
        }

        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr[i].length;j++){
                System.out.print(arr[i][j] + " ");
                // arr[i][j]=5+i;
                
            }
         }
    }
}
