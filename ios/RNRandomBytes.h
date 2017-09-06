
#import <Foundation/Foundation.h>
#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#import "RCTBridge.h"
#else
#import <React/RCTBridgeModule.h>
#import <React/RCTBridge.h>
#endif

@interface RNRandomBytes : NSObject <RCTBridgeModule>

@end
  
