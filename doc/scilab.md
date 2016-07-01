## Scilab

### for-loop over Matrix
```scilab
for i=1:size(P, 1)
    for j=1:size(P, 2)
        // ...
    end
end
```

### if

```scilab
if x == %T then
    // ...
elseif x <> %F
    // ...
else
    // ...
end
```

### function definition

```scilab
// return values
//         |          arguments
//         |              |
//         v              v
function [a,b]=isPeriodic(P,T)
    // ...
endfunction
```

### ones()

```scilab
ones()     // passt sich an
ones(1, 5) // Zeilenvektor [1 1 1 1 1]
ones(5, 1) // Spaltenvektor [1;1;1;1;1]
```

### right and left division

Backslash denotes left matrix division. `x = A \ b` is a solution to `A * x = b`.

Right division. `x = A / b` is the solution of `x * b = A`.

Beispiel (veranschaulicht wie man es in Scilab machen muss):

$(E-P_(na)) * vec A = ((1),(vdots),(1)) => vec A = (((1),(vdots),(1)))/(E-P_(na)) = (E-P_(na)) \\\ ((1),(vdots),(1))$

in Scilab

```scilab
A = (eye() - P_na) \ ones(P_na, 1)
```

### matrix column/row deletion/replacement

```scilab
// cut out row 1 and 2 and then column 5
P([1, 2], [5])

// return only column 3
P(:,3)

// return only row 1
P(1,:)
```

### misc

```scilab
// diagonal of P
diag(P) 

// find all columns and rows where edge > 0.5
[rows, columns] = find(A > 0.5)
```


