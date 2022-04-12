# https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/ruby

# Write a function that will check if two given characters are the same case.

# If any of characters is not a letter, return -1
# If both characters are the same case, return 1
# If both characters are letters and not the same case, return 0

def same_case(a, b)
  firstResult = a == a.upcase
  secondResult = b == b.upcase

  if (a.match?(/[[:alpha:]]/) && b.match?(/[[:alpha:]]/))

    if firstResult == secondResult
      return 1
    else
      return 0
    end

  else
    return -1
  end
end
