#include<bits/stdc++.h>
using namespace std;
void solution(){
    int n;
    cin>>n;
    int mini=INT_MAX;
    for(int i=0;i<3;i++){
        int r;
        cin>>r;
        mini=min(mini,r);
    }
    // cout<<mini<<endl;
    cout<<n-mini<<endl;
}
int main (){
int t;
cin>>t;
while(t--){
solution();
}
return 0;
}