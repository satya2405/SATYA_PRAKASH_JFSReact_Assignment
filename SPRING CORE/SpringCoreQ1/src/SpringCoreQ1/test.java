package SpringCoreQ1;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

 
public class test {
	@SuppressWarnings("unused")
	private static ApplicationContext context;
	public static void main(String[] args) {
		 
		@SuppressWarnings("resource")
		ApplicationContext context = new ClassPathXmlApplicationContext("config.xml");
		
		//using setter injection
		//Customer customer = (Customer)context.getBean("customer");
		//customer.displayCustomer();
		
		Customer customer2 = (Customer)context.getBean("customerConstructor");
		customer2.displayCustomer();
		
		
	}


}
