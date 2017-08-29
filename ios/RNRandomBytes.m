#import "RNRandomBytes.h"
#import "RCTBridgeModule.h"
#import "RCTBridge.h"

@implementation RNRandomBytes

RCT_EXPORT_MODULE()

@synthesize bridge = _bridge;

RCT_EXPORT_METHOD(randomBytes:(NSUInteger)length
                  resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    NSLog(@"RCT_EXPORT_METHOD randomBytes started");
    resolve([self randomBytes:length]);
}

- (NSString *) randomBytes:(NSUInteger)length
{
    NSLog(@"randomBytes started");
    NSMutableData* bytes = [NSMutableData dataWithLength:length];
    SecRandomCopyBytes(kSecRandomDefault, length, [bytes mutableBytes]);
    return [bytes base64EncodedStringWithOptions:0];
}

- (NSDictionary *)constantsToExport
{
    return @{
             @"seed": [self randomBytes:4096]
             };
};

@end
