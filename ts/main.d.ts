type Platform = "windows" | "unix" | "mac" | "linux";

type Package = {
    "Build-Depends": string,
    "Description": string,
    "Name": string,
    "Source": string,
    "Version": string,
    "arm-uwp": compatibiltyStatus,
    "arm64-windows": compatibiltyStatus,
    "x64-linux": compatibiltyStatus,
    "x64-osx": compatibiltyStatus,
    "x64-uwp": compatibiltyStatus,
    "x64-windows": compatibiltyStatus,
    "x64-windows-static": compatibiltyStatus,
    "x86-windows": compatibiltyStatus
}

type compatibiltyStatus = "pass" | "fail" | "ignore" | "skip";

