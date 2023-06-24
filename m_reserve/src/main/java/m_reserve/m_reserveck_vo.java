package m_reserve;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class m_reserveck_vo {

	int ridx;
	String m_name,m_tel,m_mt,m_dong,m_money,m_person,event,rno,pay;
	Date indate, outdate, m_date;
	
	
}
