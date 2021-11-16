package Lambda_assignment;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.function.Consumer;

public class LambdaThread {

	public static void main(String[] args) {
		
		List<Integer> list = Arrays.asList(1,2,3,4,5,6,7,8,9);
		
		Consumer<List<Integer>>dispList = (list1) -> {
			for(Integer integer : list1) {
				System.out.print(integer + " ");
				}
			};
		 
		Thread newthread = new Thread( ()-> dispList.accept(list) );
		
		newthread.start();
 	 
	}
  
}
