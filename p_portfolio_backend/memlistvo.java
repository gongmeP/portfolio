package admin;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class memlistvo {

	int midx;
	String m_id,m_name,m_passwd,m_level,m_point,m_email,m_Ptel,m_Htel,m_addr,sms,event,m_hu;
	Date m_memberdate,m_indate,m_byedate;
	
	
	
}
