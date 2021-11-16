package Lambda_assignment;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.function.Function;
public class Lambda7 {

	public static void main(String[] args) {
		Map<Integer, String> map = new HashMap<>();
		map.put(1, "Ksheera");
		map.put(2, "Chaya");
		
		Function<Map<Integer, String>, StringBuilder> function = mapValues -> {
			StringBuilder sb = new StringBuilder();
			for (Entry<Integer, String> string : mapValues.entrySet()) {
				sb.append(string.getKey());
				sb.append(string.getValue());
			}
			return sb;
		};
		
		System.out.println(function.apply(map));

	}

}
