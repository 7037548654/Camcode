import java.util.*;
class ABC{
	public static void main(String ... args){
		int arr[]={1,2,3,4};
		try {
			System.out.println(arr[2]);
			}
			catch(RuntimeException e){}
			catch(Exception e){}
			String s = "keybard";
			s.concat("mouse");
			System.out.println(s);    // output ?

			s = "om";
			s=s.concat("cat");
			System.out.println(s);   // output ?
			StringBuffer sb1 = new StringBuffer("microsoft");
			StringBuffer sb2 = new StringBuffer("microsoft");

			System.out.println( sb1 == sb2 );
			System.out.println( sb1.equals(sb2) );



	}

}