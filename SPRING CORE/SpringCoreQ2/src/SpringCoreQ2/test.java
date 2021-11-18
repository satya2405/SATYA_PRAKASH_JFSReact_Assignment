package SpringCoreQ2;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;



public class test {
	
		private static ApplicationContext context;
		public static void main(String[] args) {
			 
			context = new ClassPathXmlApplicationContext("config.xml");
			Question question = (Question)context.getBean("question");
			
			System.out.println(question.getQuestion() + "\n Output is : " + question.getQuestionList());
		}

	}
