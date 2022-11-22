public class CheckPair {
//    boolean checkPair(int[] A, int S)
//    N = length(A)
//    for i from 0 to (N - 1)
//        for j from (i + 1) to (N - 1)
//            if (A[i] + A[j] == S) return true
//            return false
    // This complexity is O(N^2)

    // complexity O(N)
    public static boolean checkPairImprove(int[] A, int S) {
        int left = 0;
        int right = A.length - 1;
        int tempSum;

        while (left < right) {
            tempSum = A[left] + A[right];
            if (tempSum == S) return true;

            if (tempSum < S) left++;
            else right--;
        }

        return false;
    }

    public static void main(String[] args) {
        int[] arr = {2, 5, 8, 12, 16, 17};
        System.out.println(checkPairImprove(arr, 23));
    }
}
