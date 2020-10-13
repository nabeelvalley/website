# Open the F# Interactive Console

You can open an F# interactive console using the `dotnet` CLI. To do so, run the following command:

```sh
dotnet fsi
```

You can then run `#help;;` from the `fsi` console to view the help menu, and `#quit;;` to quit the interactive session

Additionally, you can write multi-line `F#` code, to end a section of code add a `;;`. For example, you can write a function that will print some data into the console:

```fs
let printer s =
    printfn s
;;
```

Next, you can call the function with:

```fs
printer "Hello World";;
```

Which will execute the above code

# Run an F# Script

To run an F# script, you can use the `dotnet fsi` command, followed by an F# script file to execute the script:

```sh
dotnet fsi ./myscript.fsx
```