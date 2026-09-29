#include<bits/stdc++.h>
using namespace std;
void solution(){
    long long a,b,c;
    cin>>a>>b>>c;
    if(a>=b){
        cout<<a+c-b<<endl;
    }else{
        cout<<max(abs(a+c-b),abs(a-b))<<endl;
    }
}
int main (){
int t;
cin>>t;
while(t--){
solution();
}
return 0;
}