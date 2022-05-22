import java.util.Scanner;
public class Challenge2{
    public static void main(String[] args){
        Scanner scnr = new Scanner(System.in);
        double sphereVolume;
        double sphereRadius;

        sphereRadius = scnr.nextDouble();

        sphereVolume = (4.0/3.0) * Math.PI * sphereRadius * sphereRadius * sphereRadius;
        System.out.printf("%.2f\n", sphereVolume);
    }
}
// answer is 113.10 with input 3.

