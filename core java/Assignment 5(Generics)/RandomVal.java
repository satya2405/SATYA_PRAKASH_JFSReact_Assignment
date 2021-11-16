package genericClasses;
import java.util.*;

public class RandomVal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Random rand=new Random();
		HashMap<Integer,Double> hash=new HashMap<Integer,Double>(10);
		hash.put(20,30.83);
		hash.put(22,31.09);
		hash.put(21,32.83);
		hash.put(24,33.83);
		hash.put(25,34.83);
		hash.put(26,35.83);
		hash.put(27,36.83);
		hash.put(28,37.83);
		hash.put(29,38.83);
		hash.put(30,39.83);
		System.out.println(hash);
	}

}

