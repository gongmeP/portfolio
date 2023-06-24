package m_reserve;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class m_reserve_vo {

	int midx;
	String m_id,m_passwd,m_name,m_tel,m_email,sms,event;
	Date m_date;
	
	
}
