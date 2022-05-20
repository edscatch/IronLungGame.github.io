import java.util.scanner;
public class OpenDoors {
    public static void main (String[] args){
        Scanner scnr = new Scanner(System.in);
        int userNumber;

        userNumber = scnr.nextInt();
        
        if(userNumber >= 1 && userNumber <= 3){
            System.out.println("Your number is small")
        }
        else if(userNumber >= 4 && userNumber <=8){
            System.out.println("Your number is kind small");
        }
        else if(userNumber >=9 && userNumber <= 50){
            System.out.println("your number is moderate");
        }
        else{
            System.out.println("your number is big!");
        }
    }
}
// answer is: your number is moderate.