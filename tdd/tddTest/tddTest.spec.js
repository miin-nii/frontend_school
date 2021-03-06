
// describe : 테스트 유닛들의 모음
describe('자스민 테스트입니다.', () => {

    // it : 함수 테스트 유닛입니다.
    it('더하기 1을 하는 함수입니다.', () => {

        let num = 30;

        // expect : 기대식. 실행할 함수의 결과값을 인수로 전달합니다.
        // toBe : 매체함수. 내가 기대한 결과와 일치하는지 판단하는 함수.
        // plusOne함수를 테스트 하는 것! 
        expect(plusOne(num)).toBe(num + 1);

    })

})
