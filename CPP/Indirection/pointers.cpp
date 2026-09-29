#include<bits/stdc++.h>
using namespace std;

int main(){
    int x = 5;
    int *p = &x; // p is a pointer to an integer, initialized to the address of x
    *p = 10; // dereferencing p to change the value of x to 10
    cout << "x: " << x << endl;
    cout << "p: " << p << endl; // prints the address of x
    cout << "*p: " << *p << endl; // dereferencing p gives the value of x

    *p = 10; // changing the value of x through the pointer p
    cout << "x after modification through pointer: " << x << endl;

    return 0;

    //dereferencing a pointer means accessing the value stored at the memory address that the pointer is pointing to. In C++, you can dereference a pointer using the * operator. When you dereference a pointer, you can read or modify the value it points to.
    // priority of operators:
    // 1. Parentheses ()
    // 2. Unary operators (e.g., *, &, +, -, !)
    // 3. Binary operators (e.g., +, -, *, /, %)
    // 4. Assignment operators (e.g., =, +=, -=, *=, /=)

    /*
    Three meaning of & and Two meaning of * in C++:
    1. & (Address-of operator): When used in front of a variable, it returns the memory address of that variable. For example, int x = 5; int* p = &x; Here, &x gives the address of x, which is assigned to the pointer p.


    2. & (Reference operator): When used in a function parameter, it indicates that the parameter is passed by reference, allowing the function to modify the original variable. For example,
    void increment(int& num) { num++; } int main() { int x = 5; increment(x); // x is now 6 }


    3. * (Dereference operator): When used in front of a pointer, it accesses the value stored at the memory address that the pointer is pointing to. For example, int x = 5; int* p = &x; cout << *p; // prints 5


    4. * (Pointer declaration): When used in a variable declaration, it indicates that the variable is a pointer type. For example, int* p; declares p as a pointer to an integer.


    5. * (Multiplication operator): When used between two operands, it performs multiplication. For example, int result = 5 * 3; // result is 15

    A pointer is a variable that stores the memory address of another variable. It allows you to indirectly access and manipulate the value of the variable it points to. Pointers are commonly used in C++ for dynamic memory allocation, passing arguments by reference, and implementing data structures like linked lists and trees.

    A pointer that is declared but not initialized will have an indeterminate value, which means it may point to any random memory location. Dereferencing such a pointer can lead to undefined behavior, including crashes or data corruption. To avoid this, it is good practice to initialize pointers to nullptr (or NULL in older C++ versions) when they are declared, indicating that they do not point to any valid memory address.

    int *ptr;
    *ptr = 10; // This is unsafe and can lead to undefined behavior since ptr is uninitialized
    when the object a pointer points to is destroyed, the pointer is not automatically reset  -it is left dangling. A dangling pointer is a pointer that points to a memory location that has been deallocated or freed. Accessing or dereferencing a dangling pointer can lead to undefined behavior, including crashes or data corruption. To avoid dangling pointers, it is important to set pointers to nullptr after the object they point to is destroyed or deallocated.

    it is programmer responsibility to ensure that pointers are properly managed and do not become dangling. This can be done by setting pointers to nullptr after the object they point to is destroyed or deallocated, and by avoiding the use of pointers that have been freed or deleted.
    */
}