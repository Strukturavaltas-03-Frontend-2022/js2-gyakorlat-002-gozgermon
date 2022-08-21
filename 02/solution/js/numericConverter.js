function numericConverter(numToConvert)
{
return {
    binary: numToConvert.toString(2),
    octal: numToConvert.toString(8),
    hexa: numToConvert.toString(16)

}
}

export default numericConverter;