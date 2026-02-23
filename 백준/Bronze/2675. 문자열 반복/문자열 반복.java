import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 1. 테스트 케이스 개수 T 입력
        int t = sc.nextInt();

        for (int i = 0; i < t; i++) {
            // 2. 반복 횟수 R과 문자열 S 입력
            int r = sc.nextInt();
            String s = sc.next();

            // 3. 로직 구현 (문자열의 각 문자를 r번 출력)
            for (int j = 0; j < s.length(); j++) {
                for (int k = 0; k < r; k++) {
                    System.out.print(s.charAt(j));
                }
            }
            System.out.println(); // 줄바꿈
        }

        sc.close();
    }
}