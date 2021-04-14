public class App {
  public static void main(String[] args) {
    /* RSPEC-1148 */
    try {
      int a = 10;
      System.out.println(a / 0);
    } catch(Exception e) {
      e.printStackTrace();        // Noncompliant
    }
  }
}
