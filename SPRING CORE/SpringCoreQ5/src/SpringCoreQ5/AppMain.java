package SpringCoreQ5;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
public class AppMain {
	public static void main(String[] args) {
		 
        ApplicationContext ac = new ClassPathXmlApplicationContext("config.xml");
 
        Employee emp = ac.getBean("myemployee", Employee.class);
        System.out.println(emp.toString());
    }
}
