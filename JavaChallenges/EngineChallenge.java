public class EngineChallenge
{
    public static void main (String [] args)
    {
        String[][] specs = new String[2][4];
        specs[0][0] = "1080p, 16gb";
        specs[0][1] = "1080p, 32gb";
        specs[0][2] = "1080p, 64gb";
        specs[1][0] = "4k, 16gb";
        specs[1][1] = "4k, 32gb";
        specs[1][2] = "4k, 64gb";
        specs[1][3] = "4k, 128gb";

        System.out.println(specs[0][3]);
    }
}

