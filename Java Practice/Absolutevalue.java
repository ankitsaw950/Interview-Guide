

import java.util.Scanner;
public class Absolutevalue {
  public static void main (String[] args) {
      Scanner sc = new Scanner(System.in);
      System.out.print("Enter the number :");
      int x = sc.nextInt();
      if(x<0)
      {
          x = x * (-1);
          System.out.println("The absolute value is :"+x);
      }
      else
      {
          System.out.println("The absolute value is :"+x);
      }
  }
}
