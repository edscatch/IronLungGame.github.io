import java.util.Scanner;
public class EngineChallenge2{
   public static void algorithm(int [] numbers, int numElements) 
   {
      int i;
      int j;
      int indexSmallest;
      int temp;  
      int x;
      for (i = 0; i < numElements -1 ; ++i){
         indexSmallest = i;
         for (j = i + 1; j < numElements; ++j){
            if (numbers[j] >numbers[indexSmallest]) {
               indexSmallest = j;
            }
         }
         temp = numbers[i];
         numbers[i] = numbers[indexSmallest];
         numbers[indexSmallest] = temp;
         for (x = 0; x < numElements; ++x){
            System.out.print(numbers[x] + " ");
         }
         System.out.println();
      }
   }
   public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);
      int input, i = 0;
      int numElements = 0;
      int [] numbers = new int[10];
      for (i = 0; i < 10;++i){
         numbers[i] = scnr.nextInt();
         if(numbers[i] == -1){
            break;
         }
         ++numElements;
      }      
      algorithm(numbers, numElements);
   }
}
// Answer is selection sort