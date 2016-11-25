/*文本域文字的清空和保存*/
function text1(tmp1,tmp2)
{
	var text=new Array();
	switch(tmp1)
	{
		case 1:
		{
			document.getElementsByClassName("text_xiao").item(tmp2).value="";	
			break;
		}
		case 2:
		{
			document.getElementsByClassName("text_da").item(tmp2).innerHTML="";	
			break;
		}
	}
}

