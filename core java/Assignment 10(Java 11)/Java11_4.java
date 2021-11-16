package Java11Assignments;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
public class Java11_4 {

	public static void main(String[] args) throws IOException {
		var path = "C:\\Users\\Ksheera R\\OneDrive\\Desktop\\work\\StudentList.txt";
				List<String> str = Files.readAllLines(Path.of(path));

		long count =   str.stream().filter(l -> !(l.isBlank())).count();
		System.out.println(str.stream().filter(l -> !(l.isBlank())).map(l-> l.strip()).collect(Collectors.toList()) + "\nThere are " +count + " Students");
	}

}
