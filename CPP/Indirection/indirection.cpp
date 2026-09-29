/*
 * indirection.cpp
 * This file contains the implementation of the indirection concept in C++.
 * Indirection is a programming technique where a variable is used to store the address of another variable.
 * This allows for dynamic memory management and more flexible data structures.
 * It is commonly used in pointer arithmetic and function calls.
 * 
 */
/*
 // auto :type deduction
 auto x = 5; // x is of type int
 auto y = &x; // y is of type int*
 auto lets the compiler deduce the type of the variable based on the initializer
 reduces the need for explicit type declarations and can make code more concise and easier to read.


 auto requires an initialiser to deduce the type, and the type is fixed at compile time. It cannot be changed later in the code.
 auto x; does not work because the compiler cannot deduce the type without an initializer.
 
 */
#include<bits/stdc++.h>
using namespace std;

int main(){
    auto x = 5;
    auto y = &x;
    cout << "x: " << x << endl;
    cout << "y: " << y << endl;
    cout << "*y: " << *y << endl;
    //  auto z;/// without initialiser, the compiler cannot deduce the type of z, and it will result in a compilation error.
    //  z = nullptr;
    // cout << "z: " << z << endl;

    int z{5}; // uniform initialization syntax
    cout << "z: " << z << endl;
    int *p,q;
    p=&z;
    q=10;
    cout << "p: " << p << endl;
    cout << "*p: " << *p << endl;
    cout << "q: " << q << endl;

    // int bad{5.5}; // narrowing conversion, will result in a compilation error
    // cout << "bad: " << bad << endl;

    return 0;
}
/*
nullptr is a keyword introduced in C++11 that represents a null pointer constant. It is used to indicate that a pointer does not point to any valid memory address. Using nullptr instead of NULL or 0 improves code clarity and type safety, as it can only be assigned to pointer types.

by default, auto variables are not initialized to nullptr. If you want to initialize an auto variable to nullptr, you can do so explicitly, as shown in the code above.

by default, auto drops const and  references from the deducted type;
reapply them explicitly when needed 
 int *ptr{};
 is same as
 int *ptr = nullptr;
 A pointer implicitly converts to a boolean value in conditional statements. If the pointer is not null, it evaluates to true; otherwise, it evaluates to false. This allows for easy checking of whether a pointer is valid before dereferencing it.
 
*/

/*
uniform initialization syntax (also known as brace initialization) is a feature introduced in C++11 that allows you to initialize variables using curly braces {}. It provides a consistent and uniform way to initialize variables of different types, including built-in types, user-defined types, and containers.
 
it helps prevent narrowing conversions and provides better type safety compared to traditional initialization methods. It can also be used to initialize arrays and aggregate types.

int x{5}; // uniform initialization of an int
std::vector<int> vec{1, 2, 3}; // uniform initialization of a vector
std::string str{"Hello"}; // uniform initialization of a string

*/

/*
Range-based for loops are a feature introduced in C++11 that allows you to iterate over elements of a container (such as arrays, vectors, or other iterable types) in a more concise and readable way. The syntax is as follows:
for (declaration : container) {
    // code to be executed for each element
}
The declaration specifies the type and name of the loop variable, and the container is the iterable object being iterated over. The loop variable takes on the value of each element in the container during each iteration.

*/

/*
address-of operator (&) is a unary operator in C++ that returns the memory address of its operand. It is commonly used to obtain the address of a variable or object, which can then be stored in a pointer variable. The syntax is as follows:
type* pointerVariable = &variable;
In this example, the address of the variable is obtained using the & operator and assigned to the pointer variable. The pointer can then be used to access or modify the value of the original variable indirectly.

int x=5;
int* ptr = &x; // ptr now holds the address of x
cout<< "Address of x: " << ptr << endl; // prints the address of x

int *p, q; // p and q are both pointers to int
*/