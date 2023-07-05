package admin;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class noti_vo {

	int nt_id,view_count;
	String nt_adm,nt_title,nt_name,nt_file,nt_text;
	Date created_at;
	
	
}
