import {createContext, ReactNode, useContext, useReducer} from "react";

type Language = {
    name: string;
    id: number;
    selected: boolean;
};

type State = Language[]
type Action = { type: "SELECT"; payload?: any };
type Dispatch = (a: Action) => void;
type Reducer<S, A> = (s: S, a: A) => S;

const LanguagesStateContext = createContext<State>({} as State);
const LanguagesDispatchContext = createContext<Dispatch>({} as Dispatch);

type Props = { children: ReactNode };

export const LanguagesContextProvider = ({children}: Props) => {
    const languagesReducer: Reducer<State, Action> = (s: State, a: Action) => {
        switch (a.type) {
            case "SELECT":
                return s.map(v => {
                    if (v.id === a.payload.id) {
                        v.selected = !v.selected
                    }
                    return v
                })

            default:
                throw new Error(`Unknown action: ${a.type}`);
        }
    };

    const [state, dispatch] = useReducer(languagesReducer, [
        {name: "JavaScript", id: 0, selected: false},
        {name: "Python", id: 1, selected: false},
        {name: "Java", id: 2, selected: false},
        {name: "Go", id: 3, selected: false},
        {name: "C++", id: 4, selected: false},
        {name: "Ruby", id: 5, selected: false},
        {name: "TypeScript", id: 6, selected: false},
        {name: "PHP", id: 7, selected: false},
        {name: "C#", id: 8, selected: false},
        {name: "C", id: 9, selected: false},
        {name: "Scala", id: 10, selected: false},
        {name: "Shell", id: 11, selected: false},
        {name: "Dart", id: 12, selected: false},
        {name: "Rust", id: 13, selected: false},
        {name: "Kotlin", id: 14, selected: false},
        {name: "Swift", id: 15, selected: false},
        {name: "Groovy", id: 16, selected: false},
        {name: "Objective-C", id: 17, selected: false},
        {name: "Elixir", id: 18, selected: false},
        {name: "DM", id: 19, selected: false},
        {name: "Perl", id: 20, selected: false},
        {name: "CoffeeScript", id: 21, selected: false},
        {name: "Lua", id: 22, selected: false},
        {name: "PowerShell", id: 23, selected: false},
        {name: "Clojure", id: 24, selected: false},
        {name: "TSQL", id: 25, selected: false},
        {name: "OCaml", id: 26, selected: false},
        {name: "Vim script", id: 27, selected: false},
        {name: "Haskell", id: 28, selected: false},
        {name: "Emacs Lisp", id: 29, selected: false},
        {name: "Erlang", id: 30, selected: false},
        {name: "Jsonnet", id: 31, selected: false},
        {name: "R", id: 32, selected: false},
        {name: "Coq", id: 33, selected: false},
        {name: "Julia", id: 34, selected: false},
        {name: "MATLAB", id: 35, selected: false},
        {name: "Roff", id: 36, selected: false},
        {name: "PureScript", id: 37, selected: false},
        {name: "Puppet", id: 38, selected: false},
        {name: "WebAssembly", id: 39, selected: false},
        {name: "Fortran", id: 40, selected: false},
        {name: "SystemVerilog", id: 41, selected: false},
        {name: "F#", id: 42, selected: false},
        {name: "Visual Basic .NET", id: 43, selected: false},
        {name: "Elm", id: 44, selected: false},
        {name: "Objective-C++", id: 45, selected: false},
        {name: "Vala", id: 46, selected: false},
        {name: "Verilog", id: 47, selected: false},
        {name: "Smalltalk", id: 48, selected: false},
        {name: "Crystal", id: 49, selected: false},
    ]);

    return (
        <LanguagesDispatchContext.Provider value={dispatch}>
            <LanguagesStateContext.Provider value={state}>
                {children}
            </LanguagesStateContext.Provider>
        </LanguagesDispatchContext.Provider>
    );
};

export const useLanguages = () => useContext(LanguagesStateContext);
export const useDispatchLanguages = () => useContext(LanguagesDispatchContext);
