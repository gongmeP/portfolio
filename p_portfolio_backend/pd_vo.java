package admin;

import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class pd_vo {

	int id;
	String pd_mainca,pd_subca,pd_code,pd_text1,pd_pri,pd_rate,pd_s_pri,pd_stock,open_on_off,sold_on_off,pd_file1,pd_file2,pd_file3,pd_dt_text,pd_name;

	
	 MultipartFile file1,file2,file3;
}
