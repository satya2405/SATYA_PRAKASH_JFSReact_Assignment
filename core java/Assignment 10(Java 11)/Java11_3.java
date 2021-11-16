package Java11Assignments;
import java.util.Arrays;
import java.util.List;
public class Java11_3 {

	public static void main(String[] args) {
		List<String> str = Arrays.asList("A","quick","brown","fox","jumps","over","the","lazy","dog.");
		System.out.println(str);
		str.toArray();
		str.forEach(l -> System.out.print(l + " "));

	}

}
