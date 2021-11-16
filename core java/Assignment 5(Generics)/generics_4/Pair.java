package genericClasses;

public class Pair<T> {
	private String key;
	private T value;
	
	public void setKey(String key) {
		this.key=key;
		System.out.println(this.key);
	}
	public void setValue(T value) {
		this.value=value;
		System.out.println(this.value);
	}
}
