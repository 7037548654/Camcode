#include<iostream>
#include<math.h>
#define ll long long int



using namespace std;
int main(){

    ll b,k;
    cin>>b>>k;
    ll a[k];
    for(ll i=0;i<k;i++){
        cin>>a[i];
    }
    ll power=1,num=0;
    for(ll i = k-1;i>-1;i--){

        num=a[i]*power+num;
        cout<<b<<" "<<power<<" "<<a[i]<<endl;
        power = power*b;
    }

    cout<<num<<endl;

    cout<<((num & 1)==0? "even":"odd")<<endl;

return 0;
}
