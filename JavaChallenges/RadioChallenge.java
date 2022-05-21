import java.util.Scanner;

public class RadioChallenge {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        System.out.println("please input 2 integers");
        int userVal1 = scnr.nextInt();
        int userVal2 = scnr.nextInt();
        int tempVal = 0;
        int i = 0;

        while (tempVal < userVal2){
            tempVal = tempVal + userVal1 / 2;
            i++;
        }
        System.out.println(i);
        scnr.close();
    }
}
// Answer is 10