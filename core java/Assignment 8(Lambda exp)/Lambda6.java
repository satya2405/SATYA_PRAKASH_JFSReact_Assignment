package Lambda_assignment;
import java.util.Arrays;
import java.util.List;
import java.util.function.UnaryOperator;
public class Lambda6 {

	public static void main(String[] args) {
List<String> str = Arrays.asList("Ksheera", "Sumana","Chaya");
		
		UnaryOperator<String> unaryOperator = (list) -> list.toUpperCase();
		
		str.replaceAll(l -> unaryOperator.apply(l));
		
		 System.out.println(str);

	}

}
