package Lambda_assignment;
import java.util.ArrayList;
import java.util.List;
public class Lambda4 {

	public static void main(String[] args) {
				List<String> str = new ArrayList<>();
				
				str.add("dhiren");
				str.add("sai");
				str.add("sneha");
				str.add("Yash");
				
				str.removeIf(l -> l.length()%2 !=0);
				
				System.out.println(str);
				
		}


	}

