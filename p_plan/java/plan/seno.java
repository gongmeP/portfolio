package plan;

public class seno  {
	public String nono() throws Exception{
	long randomNumber = 0;
    for (int i = 0; i < 8; i++) {
        randomNumber = randomNumber * 10 + ((int) Math.ceil(Math.random() * 9));
    }
    
    String rdnumber = String.valueOf(randomNumber);
    return rdnumber;
    
	}
	
}
